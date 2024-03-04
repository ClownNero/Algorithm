#include<iostream>
#include<algorithm>
#define MAX 1500000

using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	int N;
	int dp[MAX+1] = { 0, };
	int time[MAX+1] = { 0, };
	int price[MAX+1] = { 0, };
	cin >> N;
	for (int i = 1; i <= N; i++) {
		cin >> time[i] >> price[i];
	}
	for (int j = N; j > 0; j--) {
		if (j + time[j] - 1 > N) dp[j] = dp[j + 1];
		else dp[j] = max(dp[j + 1], price[j] + dp[j + time[j]]);
	}
	cout << dp[1];
}