
import java.util.Collection;
import java.util.Collections;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;


    // Queue = FIFO data structure. First-In First-Out
    //                A collection designed for holding elements prior to processing
    //                Linear data structure

    //   offer() — Thêm phần tử vào cuối hàng đợi.
    //   poll() — Lấy và xóa phần tử đầu hàng đợi.
    //   peek() — Xem phần tử đầu mà không xóa.
    //   isEmpty() — Kiểm tra Queue rỗng
    //   size() — Số phần tử trong Queue
    
    //    enqueue : Thêm phần tử vào cuối hàng đợi => offer(x) hoặc add(x)
    //    dequeue : Lấy và xóa phần tử đầu hàng đợi => poll() hoặc remove()
    //    front() : Xem phần tử đầu, không xóa => peek() hoặc element()
    
    // Where are queues useful?
    
    // 1. Keyboard Buffer (letters should appear on the screen in the order they're pressed)
    // 2. Printer Queue (Print jobs should be completed in order)
    // 3. Used in LinkedLists, PriorityQueues, Breadth-first search
  
public class Main {
    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<String>();
        queue.add("Nhu");
        queue.offer("Xinh");
        queue.offer("Qua");
        queue.offer("Ne");
        System.out.println(queue);
        System.out.println(queue.contains("Nhu"));
       
        queue.poll();
        queue.remove();

        // System.out.println(queue.poll());
        System.out.println(queue);

// =============================================================
// priority Queue
        Queue<Double> queue1 = new PriorityQueue<>(Collections.reverseOrder());
        queue1.offer(3.0);
        queue1.offer(4.0);
        queue1.offer(5.0);
        queue1.offer(1.2);
        queue1.offer(7.0);

         while(!queue1.isEmpty()){
            System.out.println(queue1.poll());
         }

    }
}
