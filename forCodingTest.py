class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def isPalindrome(self, head:ListNode) -> bool:
        q: list = []

        if not head:
            return True

        node = head
        while node is not None:
            q.append(node.val)
            node = node.next

        while len(q) > 1:
            if q.pop(0) != q.pop():
                return False
        
        return True

slt = Solution()
head = ListNode()
head.append(ListNode(1))
head.append(ListNode(2))
head.append(ListNode(2))
head.append(ListNode(1))

slt.isPalindrome(head)