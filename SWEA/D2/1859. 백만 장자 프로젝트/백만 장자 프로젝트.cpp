#include<iostream>

using namespace std;

int m[1000001];
int main(int argc, char** argv)
{
    int test_case;
	int T;
	cin>>T;
    int n;
    int max;
	for(test_case = 0; test_case < T; ++test_case)
	{
        long long sum =0;
        cin >> n;
        for(int j=0; j<n; j++) cin >> m[j];
        max = m[n-1];
        for(int k=n-2; k>=0; k--){
            if(m[k] > max) max = m[k];
            else sum+=max-m[k];
        }
        cout << "#"<<test_case+1<<" " << sum << '\n';


	}
	return 0;
}