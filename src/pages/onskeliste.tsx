// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { effect, signal } from "@preact/signals";
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

const COLLECTION_NAME = "onskeliste";

type Onske = {
  id: string;
  name: string;
  link: string;
  reserved: boolean;
  sortKey: number;
  userId?: string;
};

function generateId() {
  return (
    Math.random().toString(36).substring(2) + new Date().getTime().toString(36)
  );
}

const onskelisteState = signal<Onske[]>([]);

const USER_ID_KEY = "userId";
const currentUserId = signal<string>(
  localStorage.getItem(USER_ID_KEY) ?? generateId(),
);
effect(() => {
  window.localStorage.setItem(USER_ID_KEY, currentUserId.value);
});

const onskelisteCollectionRef = collection(db, COLLECTION_NAME);

onSnapshot(onskelisteCollectionRef, (snapshot) => {
  onskelisteState.value = snapshot.docs
    .map((doc) => ({ ...doc.data(), id: doc.id }) as Onske)
    .sort((a, b) => {
      return a.sortKey - b.sortKey;
    });
});

async function reserveOnske(id: string) {
  console.log(id);
  return await updateDoc(doc(db, COLLECTION_NAME, id), {
    reserved: true,
    userId: currentUserId.value,
  });
}

async function angreOnske(id: string) {
  console.log(id);
  return await updateDoc(doc(db, COLLECTION_NAME, id), {
    reserved: false,
    userId: "",
  });
}

// @ts-ignore
function resetAll() {
  onskelisteState.value.forEach((onske) => {
    updateDoc(doc(db, COLLECTION_NAME, onske.id), {
      reserved: false,
    });
  });
}

export default function () {
  return (
    <>
      <Nav includeBack={true} />
      <div className={"center-container"}>
        <h1>Ønskeliste</h1>
        <p>
          Det absolutt viktigste for oss er at du kommer i bryllupet! Om du også
          har lyst til å gi oss en gave er det veldig hyggelig. Under finner du
          en liste over ting vi ønsker oss. Trykk på knappen der det står
          "Reservér", så ser andre at du skal gi denne slik at vi ikke ender opp
          med mange stekepanner.
        </p>
        <p>
          Gjerne gå sammen flere om en gave, og det er også veldig hyggelig med
          brukte ting som du tror vi kan ha glede av.
        </p>

        <Onskeliste />
      </div>
    </>
  );
}

// @ts-ignore
function Onskeliste() {
  return (
    <>
      <div className={"onskeliste"}>
        {onskelisteState.value.map((onske) => (
          <OnskeItem key={onske.id} onske={onske} />
        ))}
      </div>
      {/*<button onClick={resetAll}>Reset</button>*/}
    </>
  );
}

function OnskeItem({ onske }: { onske: Onske }) {
  const isLink = onske.link.startsWith("https");

  if (!isLink) {
    return (
      <>
        <p className={"name"}>{onske.name}</p>
        <p className={"description"}>{onske.link}</p>
      </>
    );
  }
  if (!onske.reserved) {
    return (
      <>
        <a className={"name"}>{onske.name}</a>
        <a className={"link"} href={onske.link} target={"_blank"}>
          Nettbutikk
        </a>
        <button className={"reserve"} onClick={() => reserveOnske(onske.id)}>
          Reservér
        </button>
      </>
    );
  }

  if (onske.userId && onske.userId === currentUserId.value) {
    return (
      <>
        <p className={"name-reserved"}>{onske.name}</p>
        <a className={"link"} href={onske.link} target={"_blank"}>
          Nettbutikk
        </a>
        <button
          className={"reserved-by-user"}
          onClick={() => angreOnske(onske.id)}
        >
          Reservert av deg
        </button>
      </>
    );
  }

  return (
    <>
      <p className={"name-reserved"}>{onske.name}</p>
      <a className={"link"} href={onske.link} target={"_blank"}>
        Nettbutikk
      </a>
      <button
        className={"reserve"}
        disabled={true}
        onClick={() => reserveOnske(onske.id)}
      >
        Reservert
      </button>
    </>
  );
}
