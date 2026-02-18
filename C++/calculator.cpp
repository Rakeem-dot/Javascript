#include <iostream>
#include <fstream>
#include <math.h>

using namespace std;

int squareroot(){ //calculating the squareroot of a number
    int num;
    cout << "Enter the number: ";
    cin >> num;
    
    if (num < 0) {
        cout << "Error: Square root of a negative number is not defined." << endl;
        return 0; //Returning 0 or you could choose to handle it differently
    }
    return sqrt(num);
}

int power(){ //calculating the power of a number
    int base;
    int exponent;
    cout << "Enter the base number:";
    cin >> base;
    cout << "Enter the exponent number:";
    cin >> exponent;
    return pow(base, exponent);

}


int addition(){ //calculating the addition of two numbers
    int num[2];
    cout << "Enter the first number: ";
    cin >> num[0];
    cout << "Enter the second number: ";
    cin >> num[1];
    return num[0] + num[1];
}

int substraction(){ //calculating the substraction of two numbers
    int num[2];
    cout << "Enter the first number: ";
    cin >> num[0];
    cout << "Enter the second number: ";
    cin >> num[1];
    return num[0] - num[1];
}
int multiplication(){ //calculating the multiplication of two numbers
    int num[2];
    cout << "Enter the first number: ";
    cin >> num[0];
    cout << "Enter the second number: ";
    cin >> num[1];
    return num[0] * num[1];
}
int division(){ //calculating the division of two numbers
    int num[2];
    
    cout << "Enter the first number: ";
    cin >> num[0];
    cout << "Enter the second number: ";
    cin >> num[1];
    if (num[1] == 0) {
        cout << "Error: Division by zero is not allowed." << endl;
        return 0; //Returning 0 or you could choose to hanndle it differently
    }
    return num[0] / num[1];
}

int main(){
    ofstream file("Calculator_log.txt", ios::app); // Open the file in append mode
    int choice;
    cout <<"Welcome to the calculator!" << endl;
    cout << "Please select an operation:" << endl;
    cout << "1. Addition" << endl;
    cout << "2. Subtraction" << endl;
    cout << "3. Multiplication" << endl;
    cout << "4. Division" << endl;
    cout << "5. Square Root" << endl;
    cout << "6. Power" << endl;

    cin >> choice;
    switch (choice) {
        case 1:
            file << "Operation: Addition, Result: " << addition() << endl; //Logging the operation and result to the file
            break;
        case 2:
            file << "Operation: Subtraction, Result: " << substraction() << endl; //Logging the operation and result to the file
            break;  
        case 3:
            file << "Operation: Multiplication, Result: " << multiplication() << endl; //Logging the operation and result to the file
            break;
        case 4:
            file << "Operation: Division, Result: " << division() << endl; //Logging the operation and result to the file
            break; 
        case 5:
            file << "Operation: Square Root, Result: " << squareroot() << endl; //Logging the operation and result to the file
            break; 
        case 6:
            file << "Operation: Power, Result: " << power() << endl; //Logging the operation and result to the file
            break;            
    }
    return 0;

    if (choice < 1 || choice > 6) { //Checking if the user input is valid
        cout << "Invalid choice. Please select  a valid operation." << endl; 
    } else {
        cout << "Operation completed successfully." << endl;
    }

    file.close(); //Close the file after writing to it   
    
}