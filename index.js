
// Task 3 
public class Main {
public static void main(String[] args) {
        int x = 3;
        int y = 4;
        double result = calculate(x, y);
        System.out.println("Result is : " + result); }

    private static double calculate(int x, int y) {
        
    }
}




// Task 

public class Main {
public static void main(String[] args) {
        int[] numbers = {5, 3, 9, 1, 4}; 
        int difference = findDifference(numbers);
        System.out.println("The difference is: " + difference); }

public static int findDifference(int[] numbers) {
    int largest = Integer.MIN_VALUE; 
        int smallest = Integer.MAX_VALUE; 
        for (int number : numbers) {
            if (number > largest) {
                largest = number; }
            if (number < smallest) {
                smallest = number; }
        }
        
        return largest - smallest; 
    }
}

// console

C:\Users\demea\.jdks\openjdk-22.0.2\bin\java.exe "-javaagent:C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2024.2.0.2\lib\idea_rt.jar=54239:C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2024.2.0.2\bin" -Dfile.encoding=UTF-8 -Dsun.stdout.encoding=UTF-8 -Dsun.stderr.encoding=UTF-8 -classpath "C:\Users\demea\IdeaProjects\Hello java\out\production\Hello java" Main
The difference is: 8

Process finished with exit code 0



