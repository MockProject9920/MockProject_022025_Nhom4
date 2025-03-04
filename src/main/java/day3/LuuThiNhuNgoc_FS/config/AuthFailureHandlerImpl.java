package day3.LuuThiNhuNgoc_FS.config;

import day3.LuuThiNhuNgoc_FS.entities.User;
import day3.LuuThiNhuNgoc_FS.repositories.UserRepository;
import day3.LuuThiNhuNgoc_FS.services.UserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class AuthFailureHandlerImpl extends SimpleUrlAuthenticationFailureHandler {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {

        String email = request.getParameter("username");

        User userDtls = (User) userRepository.findByUsername(email);

//        if (userDtls != null) {
//
//            if (userDtls.getEnable()) {
//
//                if (userDtls.getAccountNonLocked()) {
//
//                    if (userDtls.getFailedAttempt() < AppConstant.ATTEMPT_TIME) {
//                        userService.increaseFailedAttempt(userDtls);
//                    } else {
//                        userService.userAccountLock(userDtls);
//                        exception = new LockedException("Your account is locked !! failed attempt 3");
//                    }
//                } else {
//
//                    if (userService.unlockAccountTimeExpired(userDtls)) {
//                        exception = new LockedException("Your account is unlocked !! Please try to login");
//                    } else {
//                        exception = new LockedException("your account is Locked !! Please try after sometimes");
//                    }
//                }
//
//            } else {
//                exception = new LockedException("your account is inactive");
//            }
//        } else {
//            exception = new LockedException("Email & password invalid");
//        }

        super.setDefaultFailureUrl("/login?error");
        super.onAuthenticationFailure(request, response, exception);
    }

}