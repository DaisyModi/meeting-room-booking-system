package com.adobe.prj.utilities;

import java.util.Arrays;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.passay.AlphabeticalSequenceRule;
import org.passay.DigitCharacterRule;
import org.passay.LengthRule;
import org.passay.NumericalSequenceRule;
import org.passay.PasswordData;
import org.passay.PasswordValidator;
import org.passay.QwertySequenceRule;
import org.passay.RuleResult;
import org.passay.SpecialCharacterRule;
import org.passay.UppercaseCharacterRule;
import org.passay.WhitespaceRule;

public class PasswordConstraintValidator implements ConstraintValidator<ValidPassword, String> {
 
    @Override
    public void initialize(ValidPassword arg0) {
      System.out.println("PasswordConstraintValidator");
    }
 
    @Override
    public boolean isValid(String password, ConstraintValidatorContext context) {
        System.out.println("PasswordConstraintValidator : isValid()");

        PasswordValidator validator = new PasswordValidator(Arrays.asList(
           new LengthRule(8, 30), 
           new UppercaseCharacterRule(1), 
           new DigitCharacterRule(1), 
           new SpecialCharacterRule(1),
           new WhitespaceRule()));
 
        RuleResult result = validator.validate(new PasswordData(password));
        System.out.println(result);
        if (result.isValid()) {
            System.out.println(password);
            return true;
        }
        return false;
    }
}

