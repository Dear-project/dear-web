import {atom} from "recoil";
import { UserProfile } from "@/types/profile/profile.type";

export const ProfileId = atom<number>({
key: "profileId",
default:0,
})