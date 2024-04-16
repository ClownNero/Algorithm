#include <iostream>

using namespace std;

bool isPrime(int num){
    if(num <=1) return false;
    for(int i = 2; i*i<=num; i++){
        if(num % i == 0) return false;
    }
    return true;
}

int main() {
    int num, inputNum, count = 0;
    cin >> num;

    for(int i =0; i < num; i++){
        cin >> inputNum;
        if(isPrime(inputNum)){
            count++;
        }
    }
    cout << count;
    return 0;
}