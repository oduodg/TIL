#  퀴즈6
""" # 여러줄 주석 shift + option + a
def std_weight(height, gender):
    if gender == "남자":
        weight = pow(height * 0.01, 2) * 22
    else:
        weight = pow(height * 0.01, 2) * 21
    print(f"키 {height}cm {gender}의 표준 체중은 {round(weight,2)}kg 입니다.")

std_weight(175, "남자") 
"""
#  퀴즈 7
""" 
import pickle
for n in range(1,51):
    with open(str(n) + "주차.txt", "w", encoding="utf-8") as report_file:
       report_file.write("-" + str(n) + "주차 주간보고 -\n")
       report_file.write("부서 :\n")
       report_file.write("이름 :\n")
       report_file.write("업무요약 :")
    
    with open(str(n) + "주차.txt", "w", encoding="utf-8") as report_file:
        print(report_file.read())
"""

class Unit:
    def __init__(self, name, hp, damage):
        self.name = name # 멤버변수 name 에 전달값 name 저장
        self.hp = hp
        self.damage = damage
        print("{0} 유닛이 생성되었습니다.".format(self.name))
        print("체력 {0}, 공격력 {1}".format(self.hp, self.damage))

marine1 = Unit("마린", 40, 5) # 마린1 생성. 전달값으로 name, hp, damage 를 전달
marine2 = Unit("마린", 40, 5) # 마린2 생성
tank = Unit("탱크", 150, 35) # 탱크 생성