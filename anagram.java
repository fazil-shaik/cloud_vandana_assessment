import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class anagram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String input = scanner.nextLine();
        scanner.close();

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        Set<Character> alphabetSet = new HashSet<>();
        String lowercaseInput = input.toLowerCase();

        for (int i = 0; i < lowercaseInput.length(); i++) {
            char c = lowercaseInput.charAt(i);
            if (Character.isLetter(c)) {
                alphabetSet.add(c);
            }
        }

        return alphabetSet.size() == 26; // There are 26 letters in the English alphabet.
    }
}
