/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

export default function correctSentence(text) {
  if (!text) {
    return text;
  }

  const firstNonSpaceIndex = text.search(/\S|$/);
  const capitalizedText =
    text.slice(0, firstNonSpaceIndex) +
    text.charAt(firstNonSpaceIndex).toUpperCase() +
    text.slice(firstNonSpaceIndex + 1);

  return capitalizedText.endsWith('.') ? capitalizedText : `${capitalizedText}.`;
}
