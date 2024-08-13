package br.unb.unbreja

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class UnbrejaApplication

fun main(args: Array<String>) {
	runApplication<UnbrejaApplication>(*args)
}
