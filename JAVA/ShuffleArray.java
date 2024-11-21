package JAVA;
import java.util.Scanner;
import java.util.Random;

public class ShuffleArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the size of the array:");
        int size = scanner.nextInt();

        int[] array = new int[size];
        System.out.println("Enter " + size + " elements of the array:");
        for (int i = 0; i < size; i++) {
            array[i] = scanner.nextInt();
        }

        Random rand = new Random();
        for (int i = 0; i < array.length; i++) {
            int j = rand.nextInt(array.length);
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        System.out.println("Shuffled array:");
        for (int num : array) {
            System.out.print(num + " ");
        }

        scanner.close();
    }
}
