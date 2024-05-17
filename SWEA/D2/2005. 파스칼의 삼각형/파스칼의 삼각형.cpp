#include <iostream>
using namespace std;

int main() {
    int T;
    cin >> T;
    for(int test_case = 1; test_case <= T; ++test_case) {
        int N;
        cin >> N;
        int triangle[10][10] = {0,}; // 최대 크기를 가정, 실제 문제 조건에 맞게 조정 필요

        // 파스칼 삼각형 생성
        for(int i = 0; i < N; i++) {
            triangle[i][0] = 1; // 각 행의 시작은 1
            triangle[i][i] = 1; // 각 행의 끝도 1
            for(int j = 1; j < i; j++) { // 가운데 값을 채움
                triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
            }
        }

        // 결과 출력
        cout << "#" << test_case << endl;
        for(int i = 0; i < N; i++) {
            for(int j = 0; j <= i; j++) {
                cout << triangle[i][j] << " ";
            }
            cout << '\n';
        }
    }
    return 0;
}
