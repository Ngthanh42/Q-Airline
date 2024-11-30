import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (req, res) => {
    try {
        const { image } = req.body; // Hình ảnh gửi từ frontend (Base64 hoặc URL file)
        if (!image) {
            return res.status(400).json({ message: "Không có hình ảnh được tải lên" });
        }

        // Tải lên hình ảnh tới Cloudinary
        const uploadResponse = await cloudinary.uploader.upload(image, {
            folder: "admin_uploads", // Lưu vào folder "admin_uploads" trên Cloudinary
            transformation: [{ width: 500, height: 500, crop: "limit" }],
        });

        // Trả về URL của hình ảnh đã tải lên
        res.status(200).json({ url: uploadResponse.secure_url });
    } catch (err) {
        console.error("Lỗi khi tải lên ảnh:", err);
        res.status(500).json({ message: "Lỗi máy chủ khi tải ảnh lên." });
    }
};