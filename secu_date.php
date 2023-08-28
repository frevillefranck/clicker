<?php

function saisirDateNaissance()
{
    $dateValide = false;

    while (!$dateValide) {
        $input = readline("Entrez votre date de naissance (JJ/MM/AAAA) : ");

        // Vérifier si la saisie correspond au format attendu
        if (preg_match('/^(\d{2})\/(\d{2})\/(\d{4})$/', $input, $matches)) {
            $jour = intval($matches[1]);
            $mois = intval($matches[2]);
            $annee = intval($matches[3]);

            // Vérifier si la date est valide
            if (checkdate($mois, $jour, $annee)) {
                // Calculer l'âge
                $aujourdHui = new DateTime();
                $dateNaissance = new DateTime("$annee-$mois-$jour");
                $difference = $aujourdHui->diff($dateNaissance);
                $age = $difference->y;

                // Vérifier si l'âge est supérieur à 18
                if ($age >= 18) {
                    $dateValide = true;
                    $dateNaissanceFormatted = sprintf('%02d/%02d/%04d', $jour, $mois, $annee);
                    echo "Date de naissance valide : $dateNaissanceFormatted\n";
                    return $dateNaissanceFormatted;
                } else {
                    echo "Vous devez avoir au moins 18 ans pour continuer.\n";
                }
            } else {
                echo "Date de naissance invalide. Veuillez réessayer.\n";
            }
        } else {
            echo "Format invalide. Veuillez utiliser le format JJ/MM/AAAA.\n";
        }
    }
}

// Appel de la fonction pour saisir la date de naissance
$dateNaissanceSaisie = saisirDateNaissance();
