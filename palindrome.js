const String1 = "abba";
const String2 = "xxxl";

function palindrome(string) {
  let splitStrng = string.split("");
  let reverseString = "";
  for (let i = splitStrng.length - 1; i >= 0; i--) {
    reverseString += splitStrng[i];
  }
  if (reverseString === string) {
    console.log("Its a Plaindrome");
  } else {
    console.log("Not a Plaindrome");
  }
}

palindrome(String2);
