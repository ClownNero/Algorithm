#include<iostream>
#include<algorithm>
using namespace std;

int dp[100001];

int main() {
	int N;
	int num = 1;
	cin >> N;
	dp[1] = 3;
	dp[2] = 7;
	for (int i = 3; i <= N; i++) {
		dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
	}
	cout << dp[N];
}