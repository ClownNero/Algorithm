#include <iostream>
#include<queue>

using namespace std;

int m;
char cookie[1001][1001];
bool findHead = false;

int main() {
    cin.tie(NULL); cout.tie(NULL);	cin.sync_with_stdio(false);
    int row, col;
    int num=0;
    int len = 0;

    cin >> m;
    for(int i =1; i<=m; i++){
        for(int j=1; j<=m; j++){
            cin >> cookie[i][j];
            if(findHead== false && cookie[i][j]=='*'){
                findHead = true;
                row=i+1; col=j;
            }
        }
    }
    cout << row <<" " << col << '\n'; // 심장 위치
    for(int i = col-1;  i>0; i--){ // 왼팔 길이
        if(cookie[row][i] == '*') num++;
    }
    cout<< num << " ";
    num=0;
    for(int i = col+1;  i<=m; i++){ // 오른팔 길이
        if(cookie[row][i] == '*') num++;
    }
    cout<< num << " ";
    num=0;
    for(int i = row+1;  i<=m; i++){ // 허리 길이
        if(cookie[i][col] == '*') num++;
    }
    cout<< num << " ";
    len = num;
    num = 0;
    for(int i = row+len+1;  i<=m; i++){ // 왼쪽 다리 길이
        if(cookie[i][col-1] == '*') num++;
    }
    cout<< num << " ";
    num=0;
    for(int i = row+len+1;  i<=m; i++){ // 오른쪽 다리 길이
        if(cookie[i][col+1] == '*') num++;
    }
    cout<< num;

    return 0;
}