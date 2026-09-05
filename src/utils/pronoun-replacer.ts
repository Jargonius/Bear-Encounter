import type { Gender } from "../types/gender";

export function replacePronouns(gender: Gender, text: string): string {
  let replacedText = text + gender;
  // if (gender.isFemale()) {
  //   "$object"
  //   "$possessive"
  //   "$possessiveAdj"
  //   "$reflexive"
  //   replacedText = replacedText.replaceAll("$subject", gender.subject)
  //   replacedText = replacedText.replaceAll("$Subject", gender.subject)
  //   replacedText = replacedText.replaceAll("him", "her")
  //   replacedText = replacedText.replaceAll("Him", "Her")
  //   replacedText = replacedText.replaceAll("his", "her")
  //   replacedText = replacedText.replaceAll("His", "Her")
  //   replacedText = replacedText.replaceAll("him", "her")
  //   replacedText = replacedText.replaceAll("Him", "Her")

  // }
  return replacedText
}