#include <iostream>

using namespace std;
int n;

bool isPrime(int num){
    if(num == 1) return false;
    for(int i = 2; i*i<=num; i++){
        if(num%i==0) return false;
    }
    return true;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    while(true){
        int count=0;
        cin >> n;
        if(n==0) break;
        for(int i = n+1; i<=2*n; i++){
            if(isPrime(i)) count++;
        }
        cout << count<<'\n';
    }
    return 0;
}