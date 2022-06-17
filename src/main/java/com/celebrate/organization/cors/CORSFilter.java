package com.celebrate.organization.cors;

//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpMethod;
//import org.springframework.http.MediaType;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.filter.CorsFilter;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.util.stream.Collectors;
//import java.util.stream.Stream;

//public class CORSFilter extends CorsFilter {
//
//    /**
//     * Constructor accepting a {@link CorsConfigurationSource} used by the filter
//     * to find the {@link CorsConfiguration} to use for each incoming request.
//     *
//     * @param configSource
//     * @see UrlBasedCorsConfigurationSource
//     */
//    public CORSFilter(CorsConfigurationSource configSource) {
//        super(configSource);
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//
//        response.addHeader(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, "*");
//        response.addHeader(HttpHeaders.ACCESS_CONTROL_ALLOW_METHODS, Stream.of(HttpMethod.values())
//                .map(HttpMethod::name)
//                .collect(Collectors.joining(",")));
//        response.addHeader(HttpHeaders.CONTENT_TYPE, MediaType.ALL_VALUE);
//        response.addHeader(HttpHeaders.ACCESS_CONTROL_ALLOW_HEADERS,
//                "DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range,X-Signature, Authorization");
//        super.doFilterInternal(request, response, filterChain);
//    }
//}