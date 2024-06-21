#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int n;
int arr[12];
vector<int> op;

int calc(vector<int> op, int x, int y) {
    if (op[x] == 0) return y + arr[x + 1];
    else if (op[x] == 1) return y - arr[x + 1];
    else if (op[x] == 2) return y * arr[x + 1];
    else return y / arr[x + 1];
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    cin >> n;

    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    for (int i = 0; i < 4; i++) {
        int cnt;
        cin >> cnt;
        for (int j = 0; j < cnt; j++) {
            op.push_back(i);
        }
    }

    int max_value = -1000000001, min_value = 1000000001;

    do {
        int value = arr[0];
        for (int i = 0; i < n - 1; i++) {
            value = calc(op, i, value);
        }
        max_value = max(max_value, value);
        min_value = min(min_value, value);
    } while (next_permutation(op.begin(), op.end()));

    cout << max_value << '\n' << min_value << '\n';

    return 0;
}
