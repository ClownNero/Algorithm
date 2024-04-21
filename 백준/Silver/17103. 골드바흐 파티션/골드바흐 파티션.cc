#include <iostream>
#include <set>
using namespace std;
int n,m;
bool check[1000001];
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
    cin >> n;
    for(int i =2; i<=1000000; i++){
        if(isPrime(i)) check[i] = true;
    }
    for(int i =0; i<n; i++){
        int result=0;
        cin >> m;
        for(int j=m/2; j>1; j--){
            if(check[j] && check[m-j]) result++;
        }
        cout << result << '\n';
    }
    
    return 0;
}