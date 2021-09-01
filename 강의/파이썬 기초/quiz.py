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

"""
# 퀴즈 8
"""

""" 
class House:
    # 매물 초기화 : 위치, 건물 종류, 매물 종류, 가격, 준공년도
    def __init__(self, location, house_type, deal_type, price, completion_year):
        self.location = location
        self.house_type = house_type
        self.deal_type = deal_type
        self.price = price
        self.completion_year = completion_year

    # 매물 정보 표시
    def show_detail(self):
        print(self.location, self.house_type, self.deal_type, self.price, self.completion_year)

apt = House("강남", "아파트", "매매", "10억", "2010년")
office = House("마포", "오피스텔", "전세", "5억", "2007년")
villa = House("송파", "빌라", "월세", "500/50", "2000년")

houses = []
houses.append(apt)
houses.append(office)
houses.append(villa)

print(f"총 {len(houses)}대의 매물이 있습니다.")
for house in houses:
    house.show_detail() 
    """
""" 
chicken = 10 # 남은 치킨 수
waiting = 1 # 홀 안에는 현재 만석. 대기번호 1부터 시작

class Sold_out_error(Exception): # 사용자 정의 에러
    pass


while(True):
    try:
        print("[남은 치킨 : {0}]".format(chicken))
        order = int(input("치킨 몇 마리 주문하시겠습니까?"))
        if order > chicken: # 남은 치킨보다 주문량이 많을 때
            print("재료가 부족합니다.")
        elif order <= 0: 
            raise ValueError
        else:
            print("[대기번호 {0}] {1} 마리 주문이 완료되었습니다.".format(waiting, order))
            waiting += 1 # 대기번호 증가
            chicken -= order # 주문 수 만큼 남은 치킨 감소
        
        if chicken == 0: # 남은 치킨 수가 0 이면
            raise Sold_out_error # 더 이상 주문 불가하므로 재고 소진 에러 발생
    except ValueError:
        print("잘못된 값을 입력하였습니다.")
    except Sold_out_error:
        print("재고가 소진되어 더 이상 주문을 받지 않습니다.")
        break # while 반복문 탈출
    except Exception as err:
        print("알 수 없는 에러가 발생하였습니다.")
        print(err) 
        """

# 퀴즈 10

import byme
byme.sign()