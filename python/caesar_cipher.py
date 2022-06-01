def caesar_cipher(string, shift_amount):
    alphabet="abcdefghijklmnopqrstuvwxyz"
    alphabet_up=alphabet.upper()
    
    answer = ""
    for char in string:
        if char in alphabet:
            shift_index= alphabet.index(char)+shift_amount
            if shift_index >26:
                answer+=alphabet[(shift_index-26)]
            else:
                answer+=alphabet[shift_index]
        elif char in alphabet_up:
            shift_index= alphabet_up.index(char)+shift_amount
            if shift_index >26:
                answer+=alphabet_up[(shift_index-26)]
            else:
                answer+=alphabet_up[shift_index]
        else:
            answer+=char
    return answer
          
# print(caesar_cipher("Boy! What a string!", -5)) # == "Wjt! Rcvo v nomdib!")
# print(caesar_cipher("Hello zach168! Yes here.", 5)) # == "Mjqqt efhm168! Djx mjwj.")
# print(caesar_cipher("Hello Zach168! Yes here.", -5)) # == "Czggj Uvxc168! Tzn czmz.")
