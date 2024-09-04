// Task 1 
public class Main {
    public static void main(String[] args) {
        


int[] arrayNumbers = {  7, 12, -4,  5,  6, 14,  8};
int largestNumber =arrayNumbers[0];
int smallestNumber =arrayNumbers[0];


for (int i = 1; i < arrayNumbers.length; i++) {
 if (arrayNumbers[i] > largestNumber) {
     largestNumber = arrayNumbers[i];
       ;
    }
 if (arrayNumbers[i] < smallestNumber) {
     largestNumber = arrayNumbers[i];

    }
}

System.out.println("largest Number: " + largestNumber);
System.out.println("smallest Number is: " + smallestNumber);

double difference = largestNumber - smallestNumber ;
System.out.println("the difference is " + difference);


}
}




// TASK 2

public class Main {
    public static void main(String[] args) {

int[] arrayNumbers = {  7, 12, -4,  5,  6, 14,  8};
int smallest = Integer.MAX_VALUE;
int secondSmallest  =Integer.MAX_VALUE;


for (int number : arrayNumbers  ) {
    if (number  < smallest ) {
   secondSmallest  = smallest ;
   smallest = number ;
    } else if (number < secondSmallest && number != smallest ){
    secondSmallest = number;
    }

}
System.out.println("smalest value " + smallest) ;
System.out.println(" second smallest value  " + secondSmallest);


}

}

// Task 3 


public class Main {
    public static void main(String[] args) {
       double x = 5.0;
        double y = 3.0;
        double sum = xyExpression(x, y);
        System.out.println("The result is: " + sum);
    }
    public static double xyExpression (double x, double y) {
        // Step 1: Calculate x^2
        double xExpression = Math.pow(x, 2);

        // Step 2: Calculate (4y/5 - x)
        double yExpression = (4.0 * y / 5.0) - x;

        // Step 3: Square the result from Step 2
        double xSquared = Math.pow(yExpression, 2);

        // Step 4: Add the results of Step 1 and Step 3
        double result = xExpression + xSquared;

        return result;


    }

}