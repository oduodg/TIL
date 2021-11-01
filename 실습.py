import random

# 구구단
print('구구단 몇 단을 계산할까?')
num = int(input())
for i in range(9):
    print(num, 'x', i+1, '=', num * (i+1))

# 숫자 찾기 게임
target = random.randint(1,100)

while(1):
    print('추측값을 입력하세요.')
    guess = int(input())
    if guess == target:
        print("정답입니다. 정답 = ", target)
    elif guess > target:
        print("추측값이 큽니다.")
    else:
        print("추측값이 작습니다.")
'''
guess_number = random.randint(1,100)
print("숫자를 맞혀 보세요. (1~100)")
users_input = int(input())
while (users_input is not guess_number):
    if users_input > guess_number:
        print("숫자가 너무 큽니다.")
    else:
        print("숫자가 너무 작습니다.")
    users_input = int(input())
else:
    print("정답입니다.","입력한 숫자는",users_input,"입니다.")
'''

# 평균 구하기
scores = [[49,80,20,100,80],[43,60,85,30,90],[49,82,48,50,100]]

numStudent = len(scores[0])
numSubject = len(scores)

for i in range(numStudent):
    total = 0.0
    for j in range(numSubject):
        total += scores[j][j]
    
    print('학생', i, '평균 =', total/numSubject)
