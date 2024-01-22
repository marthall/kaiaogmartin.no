// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { signal } from "@preact/signals";
import { Nav } from "./nav.tsx";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzuEWqSe-iUqC0XaXCrMotgdlg7m5SNeg",
  authDomain: "kaiaogmartin.firebaseapp.com",
  projectId: "kaiaogmartin",
  storageBucket: "kaiaogmartin.appspot.com",
  messagingSenderId: "1043951426861",
  appId: "1:1043951426861:web:ec5e9ef47ab4fdd4e647a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

type Onske = {
  id: string;
  name: string;
  link: string;
  reserved: boolean;
};
const onskelisteState = signal<Onske[]>([]);

const docRef = collection(db, "onskeliste");

async function fetchData() {
  const docSnap = await getDocs(docRef);
  onskelisteState.value = docSnap.docs.map((doc) => doc.data() as Onske);
}

fetchData();

// @ts-ignore
const CAN_ADD = new URLSearchParams(window.location.search).has("admin");

export default function () {
  return (
    <>
      <Nav includeBack={true} />
      <div className={"center-container"}>
        <h1>Ønskeliste</h1>
        <p className={"coming"}>Kommer</p>

        {/*<Onskeliste />*/}
        {/*{CAN_ADD && <AddNew />}*/}
      </div>
    </>
  );
}

// @ts-ignore
function Onskeliste() {
  return (
    <div className={"onskeliste"}>
      {onskelisteState.value.map((onske) => (
        <OnskeItem key={onske.id} onske={onske} />
      ))}
    </div>
  );
}

function OnskeItem({ onske }: { onske: Onske }) {
  return (
    <>
      <span>{onske.name}</span>
      <a href={onske.link}>Til nettbutikk</a>
      <button disabled={onske.reserved}>
        {onske.reserved ? "Reservert" : "Reservér"}
      </button>
    </>
  );
}

const emptyOnske: Omit<Onske, "id"> = {
  name: "",
  link: "",
  reserved: false,
};

const newOnske = signal<Omit<Onske, "id">>(emptyOnske);

async function addOnske() {
  await addDoc(docRef, newOnske.value);
  await fetchData();
  newOnske.value = emptyOnske;
}

// @ts-ignore
function AddNew() {
  return (
    <div className={"form"}>
      <div>
        <label htmlFor="name">Navn</label>
        <input
          key={"name"}
          value={newOnske.value.name}
          type="text"
          onChange={(e) => {
            newOnske.value = {
              ...newOnske.value,
              name: e.currentTarget.value,
            };
          }}
        />
      </div>
      <div>
        <label htmlFor="link">Lenke</label>
        <input
          value={newOnske.value.link}
          type="text"
          onChange={(e) => {
            newOnske.value = {
              ...newOnske.value,
              link: e.currentTarget.value,
            };
          }}
        />
      </div>

      <button onClick={addOnske}>Legg til</button>
    </div>
  );
}
