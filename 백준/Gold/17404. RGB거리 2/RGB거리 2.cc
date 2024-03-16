#include<iostream>
#include<algorithm>
#define MAX 987654321
int home[1001][3] = { 0, };
int color[1001][3] = { 0, };

using namespace std;
int n;
// 1번 집의 색은 2번, N번 집의 색과 같지 않아야 한다. => 양 끝 집 색은 달라야함.
// N번 집의 색은 N-1번, 1번 집의 색과 같지 않아야 한다.
// i(2 <= i <= N-1)번 집의 색은 i-1, i+1번 집의 색과 같지 않아야 한다. => 양 옆 집 색은 달라야함.
int main() {

	int result = MAX;
	cin >> n;

	for (int i = 1; i <= n; i++)
		cin >> color[i][0] >> color[i][1] >> color[i][2];
	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) {
			if (j == i) home[1][j] = color[1][j];
			else home[1][j] = MAX;
		}

		for (int k = 2; k <= n; k++) {
			home[k][0] = min(home[k - 1][1], home[k - 1][2]) + color[k][0];
			home[k][1] = min(home[k - 1][0], home[k - 1][2]) + color[k][1];
			home[k][2] = min(home[k - 1][0], home[k - 1][1]) + color[k][2];
		}

		for (int z = 0; z < 3; z++) {
			if (z == i) continue;
			else result = min(result, home[n][z]);
		}
	}
	cout << result;
}