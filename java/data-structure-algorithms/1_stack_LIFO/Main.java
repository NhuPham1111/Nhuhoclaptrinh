import java.util.Stack;

  // Stack là cấu trúc LIFO: phần tử được thêm sau cùng sẽ được lấy ra trước.
  // stack = LIFO data structure. Last-In First-Out
  //               stores objects into a sort of "vertical tower"
  //               push() to add objects to the top
  //               pop() to remove objects from the top
  //               peek() view the top element 
  //               search("item") searching index of item (= negative if not found)
  
  // uses of stacks?
  // 1. undo/redo features in text editors
  // 2. moving back/forward through browser history
  // 3. backtracking algorithms (maze, file directories)
  // 4. calling functions (call stack)

public class Main{
    public static void main(String[] args) {

        Stack<String> stack = new Stack<String>();
        
        stack.push("item1");
        stack.push("item2");
        stack.push("item3");
        stack.push("item4");
        stack.push("item5");

        // String my = stack.pop();
        System.out.println(stack.peek());
        System.out.println(stack);

        for(int i = 0; i < 1000000000; i++){
            stack.push("nhuxinh");
        }
    }
}