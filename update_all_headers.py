#!/usr/bin/env python3
"""Script pour mettre à jour tous les headers du site avec les nouveaux boutons"""

import os
import re

# Définir le nouveau code des boutons
NEW_BUTTONS = '''<div class="buttons-row nav-menu-hidden-on-tablet" style="display: flex; gap: 12px;">
<a class="secondary-button w-inline-block" href="../analyse-devis.html" style="background: transparent; border: 2px solid #2563eb; color: #2563eb; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s;">
<div>Analyse de devis</div>
</a>
<a class="primary-button w-inline-block" href="../connexion-inscription.html">
<div>Configurateur pour pro</div>
</a>
</div>'''

# Pattern à chercher (ancien bouton)
OLD_PATTERN = re.compile(
    r'<div class="buttons-row nav-menu-hidden-on-tablet">.*?</div>\s*</div>',
    re.DOTALL
)

def update_file(filepath, depth=0):
    """Met à jour le header d'un fichier HTML"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Vérifier si le fichier a déjà le nouveau header
        if 'Analyse de devis' in content:
            print(f"✓ Déjà à jour: {filepath}")
            return False
        
        # Vérifier si le fichier a l'ancien pattern
        if 'buttons-row nav-menu-hidden-on-tablet' not in content:
            print(f"⊘ Pas de header: {filepath}")
            return False
        
        # Adapter le chemin selon la profondeur
        prefix = '../' * depth
        buttons_code = NEW_BUTTONS.replace('../', prefix)
        
        # Chercher et remplacer
        match = OLD_PATTERN.search(content)
        if match:
            # Trouver juste avant </div> de nav-menu-right-side
            old_section = match.group(0)
            # On garde juste la première div et on remplace le contenu
            new_section = buttons_code + '\n</div>'
            
            updated_content = content.replace(old_section, new_section)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(updated_content)
            
            print(f"✅ Mis à jour: {filepath}")
            return True
        else:
            print(f"⚠ Pattern non trouvé: {filepath}")
            return False
            
    except Exception as e:
        print(f"❌ Erreur {filepath}: {e}")
        return False

def main():
    base_dir = os.path.dirname(__file__)
    
    folders = {
        'blog': 1,
        'partenaires': 1,
        'kits-renovation': 1,
        'nos-produits': 1,
    }
    
    updated_count = 0
    
    for folder, depth in folders.items():
        folder_path = os.path.join(base_dir, folder)
        if not os.path.exists(folder_path):
            continue
            
        print(f"\n📁 Traitement du dossier: {folder}/")
        
        for filename in os.listdir(folder_path):
            if filename.endswith('.html'):
                filepath = os.path.join(folder_path, filename)
                if update_file(filepath, depth):
                    updated_count += 1
    
    print(f"\n✨ Total: {updated_count} fichiers mis à jour")

if __name__ == '__main__':
    main()
