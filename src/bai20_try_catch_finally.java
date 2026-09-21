public class bai20_try_catch_finally {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;

        try {
            int c = a/b;
            System.out.println("c = "+ c);
        }
        catch (ArithmeticException ex){
            System.out.println("Co loi toan hoc roi");
        }
        catch (Exception ex){
            System.out.println("Co loi roi");
            ex.printStackTrace();
        }
        finally {
            System.out.println("Co loi hay ko co loi deu chay");
        }
            System.out.println("doan code phia sau");

    }

    /*
    * Lỗi
    * 1. Lỗi biên dịch: lỗi do sai cú pháp ctr ko chạy được
    * 2. Lỗi runtime exception : biên dịch bth -> khi chạy mới phát sinh lỗi
    * 3. Lỗi logic exception : sai nghiệp vụ, sai yêu cầu do ltv tư duy sai ko nhận đc kq đúng yêu cầu KH
    * */

    /*Xử lý ngoại lệ: lỗi có thể phát sinh lúc thực thi, xly lỗi này giúp:
    1.xuất thông báo lỗi
    2. Tiếp tục chạy ctrinh mà ko làm gián đoạn, treo phần mềm
    * */

    /*try-catch-finally
    *
    *
    * */
}
