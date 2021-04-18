import React, { useEffect, useState } from 'react';
import { Paragraph, Spinner } from '@contentful/forma-36-react-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Field = ({ sdk }: FieldProps) => {
  const [ingredient, setIngredient] = useState('')
  const [amount, setAmount] = useState(sdk.entry.fields.amount.getValue())
  const [measurement, setMeasurement] = useState('')

  useEffect(() => {
    const detachIngredientChange = sdk.entry.fields.ingredient.onValueChanged(ingredient => {
      if (ingredient) {
        sdk.space.getEntry(ingredient.sys.id).then((ingredient: any) => {
          setIngredient(ingredient.fields.name['sv-SE'])
        })
      }
    })

    const detachAmountChange = sdk.entry.fields.amount.onValueChanged(amount => {
      setAmount(amount)
    })

    const detachMeasurementChange = sdk.entry.fields.measurement.onValueChanged(measurement => {
      if (measurement) {
        sdk.space.getEntry(measurement.sys.id).then((measurement: any) => {
          setMeasurement(measurement.fields.name['sv-SE'])
        })
      } else {
        setMeasurement('')
      }
    })
    
    return () => {
      detachIngredientChange()
      detachAmountChange()
      detachMeasurementChange()
    }
  }, [sdk.space, sdk.entry.fields.ingredient, sdk.entry.fields.amount, sdk.entry.fields.measurement]);

  if (!ingredient) {
    return <Spinner />
  }

  let title = ingredient;

  if (amount) {
    title += ` ${amount}`
  }

  if (measurement) {
    title += ` ${measurement}`
  }

  sdk.field.setValue(title)

  return <Paragraph>{title}</Paragraph>
};

export default Field;
