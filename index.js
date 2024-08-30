public class Main {
    public static void main(String[] args) {

// Task 1 

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







// TASK 2

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



// Task 3 
