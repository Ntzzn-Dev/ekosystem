import { ref, push, onValue, get, set, child, remove } from "firebase/database";
import { database } from "../firebase";

export function useFirebaseRoom() {
  async function isRoomRemoved(roomId) {
    const roomRef = ref(database, "rooms/" + roomId);
    const snapshot = await get(roomRef);
    return !snapshot.exists();
  }

  async function clearRoom(roomId) {
    const roomRef = ref(database, "rooms/" + roomId);
    await remove(roomRef);
  }

  return { isRoomRemoved, clearRoom, ref, push, onValue, get, set, child, remove };
}
