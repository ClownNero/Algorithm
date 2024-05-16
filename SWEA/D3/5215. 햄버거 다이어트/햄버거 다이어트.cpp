#include <iostream>
#include <vector>
using namespace std;

int N, L; // N: 재료의 개수, L: 제한 칼로리
vector<pair<int, int>> ingredients; // 재료의 점수와 칼로리를 저장하는 벡터
int maxScore = 0; // 최대 점수를 저장할 변수

// 현재 선택한 재료까지의 점수와 칼로리, 현재 선택한 재료의 인덱스
void chooseIngredient(int score, int calorie, int index) {
    // 제한 칼로리를 넘는 경우 더 이상 진행하지 않음
    if (calorie > L) return;

    // 모든 재료를 고려했을 때, 현재까지의 점수가 최대 점수보다 클 경우 갱신
    if (index == N) {
        maxScore = max(maxScore, score);
        return;
    }

    // 현재 재료를 선택하는 경우
    chooseIngredient(score + ingredients[index].first, calorie + ingredients[index].second, index + 1);

    // 현재 재료를 선택하지 않는 경우
    chooseIngredient(score, calorie, index + 1);
}

int main() {
    int T; // 테스트 케이스의 수
    cin >> T;

    for (int tc = 1; tc <= T; ++tc) {
        cin >> N >> L;
        ingredients.clear();
        maxScore = 0;

        for (int i = 0; i < N; ++i) {
            int taste, calorie;
            cin >> taste >> calorie;
            ingredients.push_back({taste, calorie});
        }

        chooseIngredient(0, 0, 0);

        cout << "#" << tc << " " << maxScore << "\n";
    }

    return 0;
}
