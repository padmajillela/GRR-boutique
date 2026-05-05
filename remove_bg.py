from PIL import Image

def remove_white_bg(input_path, output_path, tolerance=240):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    data = img.getdata()

    new_data = []
    for item in data:
        # Check if the pixel is mostly white
        if item[0] >= tolerance and item[1] >= tolerance and item[2] >= tolerance:
            # Change the white (or near white) to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    input_file = r"C:\Users\Lenovo\Downloads\ChatGPT Image May 5, 2026, 01_02_54 AM.png"
    output_file = r"C:\Users\Lenovo\Desktop\GRR Boutique & Tailoring\src\assets\images\logo.png"
    remove_white_bg(input_file, output_file)
