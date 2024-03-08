#include<iostream>
#include<algorithm>

using namespace std;
//첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.
int dp[1001];
int main() {
	dp[1] = 1; dp[2] = 2;
	
	int N; cin >> N;
	for (int i = 3; i <= N; i++) {
		dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
	}
	cout << dp[N];

}