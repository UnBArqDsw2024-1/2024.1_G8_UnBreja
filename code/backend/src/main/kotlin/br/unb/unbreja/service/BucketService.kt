package br.unb.unbreja.service

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import java.io.File
import java.util.*

@Service
class BucketService {
    @Value("\${image-folder}")
    val imageFolder: String? = null

    fun upload(file: MultipartFile): String {
        val fileName = "${UUID.randomUUID()}.${file.contentType?.split("/")?.get(1) ?: "png"}"
        file.transferTo(File("$imageFolder/${fileName}"))
        return fileName
    }
}
