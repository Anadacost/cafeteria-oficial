package com.br.cafeteriaestrela.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GestaoController {

    @GetMapping("/login")
    public String login() {
        return "gestao/login";
    }

    @GetMapping("/gestao")
    public String gestao() {
        return "gestao/gestao";
    }

    @GetMapping("/pedidos")
    public String pedidos() {
        return "gestao/pedidos";
    }

    @GetMapping("/produtos")
    public String produtos() {
        return "gestao/produtos";
    }
}
