import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const {persistAtom} = recoilPersist()

const authenticatedUser = atom({
    default: {
        user: [],
        check: false
    },
    effects_UNSTABLE:[persistAtom],
})


export {authenticatedUser}