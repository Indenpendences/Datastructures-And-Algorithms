#include<iostream>
#include<string>


class Node {
    private: 
        std::string value;
        Node *next;
    public:
        Node(std::string _value) {
            this->value = _value;
            this->next = nullptr;
        }  
}

void printList(Node *head) {
    Node *current = head;
    while(current != nullptr) {
        std::cout << current->value << std::endl;
        current = current->next;
    }
}

void printList(Node *head) {
    if(head == nullptr) {
        return;
    }
    std::cout << head->value << std::endl;
    printList(head->next);
}
 
