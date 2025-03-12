# 🔹 Giải thích Chi tiết Theo Module

1. Module Khách hàng và Tài khoản (Customer Management)

   > Backend (Java):

   - Quản lý các bảng: Customers, Users, Accounts, Beneficiaries
   - Chức năng: Đăng ký, đăng nhập, quản lý thông tin cá nhân, quản lý người thụ hưởng, phân quyền người dùng và hồ sơ khách hàng.

   > Frontend (React):

   - Thư mục features/customer-management/ chứa:
   - components/: Các form đăng ký, hiển thị thông tin tài khoản,…
   - pages/: Trang Login, Register, Profile, Beneficiaries.
   - services/: API call đến backend Java.
   - store/: Redux slice hoặc Context quản lý trạng thái cho module này.

==========================================================================================

2. Module Tài sản và Định giá (Property & Appraisal)

   > Backend (Java):

   - Quản lý các bảng: Properties, Property_Types, Appraiser
   - Chức năng: Quản lý thông tin tài sản, lập hồ sơ định giá, quản lý chuyên gia định giá, lịch thẩm định và báo cáo định giá.

   > Frontend (React):

   - Thư mục features/property-appraisal/ chứa:
   - components/: Component hiển thị thông tin tài sản, form định giá,…
   - pages/: Trang danh sách tài sản, chi tiết định giá, lịch thẩm định.
   - services/ và store/: Xử lý các API và trạng thái liên quan.

==========================================================================================

3. Module Hợp đồng Bảo hiểm (Policy Management)

   > Backend (Java):

   - Quản lý các bảng: Policies, Policy_Types, Coverages
   - Chức năng: Tạo và quản lý hợp đồng, cấu hình sản phẩm bảo hiểm, tính phí bảo hiểm và gia hạn hợp đồng.

   > Frontend (React):

   - Thư mục features/policy-management/ chứa các thành phần để:
   - Tạo, hiển thị danh sách và chi tiết hợp đồng bảo hiểm.
   - Tích hợp API liên quan và quản lý trạng thái qua store/.

==========================================================================================

4. Module Xử lý Bồi thường (Claims Processing)

   > Backend (PHP):

   - Quản lý các bảng: Claims, Claim_Documents, Claim_Status, Claim_Types
   - Chức năng: Tiếp nhận yêu cầu bồi thường, quản lý tài liệu hỗ trợ, xét duyệt và theo dõi trạng thái, phê duyệt thanh toán bồi thường.

   > Frontend (React):

   - Thư mục features/claims-processing/ bao gồm:
   - components/: Form tiếp nhận yêu cầu, hiển thị trạng thái xét duyệt,…
   - pages/: Danh sách yêu cầu bồi thường, chi tiết yêu cầu.
   - services/ và store/: Tương tác với backend PHP.

==========================================================================================

5. Module Thanh toán (Payment Processing)

   > Backend (Node.js):

   - Quản lý các bảng: Payments, Payment_Methods, Invoices, Transactions
   - Chức năng: Tích hợp cổng thanh toán, quản lý hóa đơn, theo dõi giao dịch và báo cáo tài chính.

   > Frontend (React):

   - Thư mục features/payment-processing/ chứa:
   - components/: Form thanh toán, hiển thị lịch sử giao dịch,…
   - pages/: Trang thanh toán, chi tiết giao dịch.
   - services/ và store/: Kết nối và xử lý dữ liệu từ backend Node.js.
