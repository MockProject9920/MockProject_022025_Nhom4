# MockProject_022025_Nhom4

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
