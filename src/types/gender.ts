export interface Gender {
  name: "male" | "female";
  probability: 50;
  subject: "he" | "she";
  object: "him" | "her";
  possessive: "his" | "hers";
  reflexive: "himself" | "herself";

  // isMale(): boolean {
  //   return this.name === "male";
  // }

  // isFemale(): boolean {
  //   return this.name === "female";
  // }
}