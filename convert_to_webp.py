#!/usr/bin/env python3
"""
Script pour convertir les images PNG lourdes en WebP
Optimisation des performances du site SlideX
"""

from PIL import Image
import os
from pathlib import Path

# Images à convertir (plus de 500KB)
images_to_convert = [
    "images/1V-SF-N.png",
    "images/1V-SF-GA.png",
    "images/1V-T-GA.png",
    "images/2V-SF-GA.png",
    "images/Photowebporteauto.png",
    "images/Porte-auto.png",
    "images/Kit_reno_pub.png",
    "images/Nos_Alus_.png",
]

def convert_to_webp(image_path, quality=85):
    """Convertit une image en WebP avec optimisation"""
    try:
        img_path = Path(image_path)
        
        if not img_path.exists():
            print(f"⚠️  Image non trouvée : {image_path}")
            return False
        
        # Ouvrir l'image
        img = Image.open(img_path)
        
        # Convertir en RGB si nécessaire (WebP ne supporte pas tous les modes)
        if img.mode in ('RGBA', 'LA', 'P'):
            # Conserver la transparence pour RGBA
            if img.mode == 'RGBA':
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[3])
                img = background
            else:
                img = img.convert('RGB')
        
        # Générer le nom du fichier WebP
        webp_path = img_path.with_suffix('.webp')
        
        # Sauvegarder en WebP
        img.save(webp_path, 'WebP', quality=quality, method=6)
        
        # Afficher les tailles
        original_size = img_path.stat().st_size / 1024 / 1024
        webp_size = webp_path.stat().st_size / 1024 / 1024
        reduction = ((original_size - webp_size) / original_size) * 100
        
        print(f"✅ {img_path.name}")
        print(f"   Original: {original_size:.2f} MB → WebP: {webp_size:.2f} MB")
        print(f"   Réduction: {reduction:.1f}%\n")
        
        return True
        
    except Exception as e:
        print(f"❌ Erreur pour {image_path}: {e}")
        return False

def main():
    print("🚀 Conversion des images en WebP...\n")
    
    success_count = 0
    total_count = 0
    
    for img_path in images_to_convert:
        total_count += 1
        if convert_to_webp(img_path):
            success_count += 1
    
    print(f"\n✨ Terminé : {success_count}/{total_count} images converties avec succès")
    print(f"📊 Gain estimé : ~3-4 MB de réduction au chargement")

if __name__ == "__main__":
    main()
