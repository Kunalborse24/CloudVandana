package JAVA;
import java.util.Scanner;

public class isPangram {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence to check if it is a pangram:");
        String sentence = scanner.nextLine();

        boolean isPangram = isPangram(sentence);
        if (isPangram) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }

        scanner.close();
    }

    public static boolean isPangram(String sentence) {
        sentence = sentence.toLowerCase().replaceAll("[^a-z]", "");
        boolean[] lettersPresent = new boolean[26];
        for (int i = 0; i < sentence.length(); i++) {
            char c = sentence.charAt(i);
            lettersPresent[c - 'a'] = true;
        }
        for (boolean present : lettersPresent) {
            if (!present) {
                return false;
            }
        }
        return true;
    }
}

