import MultilineInput from '../../Components/Inputs/MultilineInput'
import Textarea from '../../Components/Inputs/Textarea'
import Combobox from '../../Components/Inputs/Combobox'
import ComboCheckbox from '../../Components/Inputs/ComboCheckbox'
import DisableInput from '../../Components/Inputs/DisableInput'
import DateInput from '../../Components/Inputs/DateInput'
import SelectInput from '../../Components/Inputs/SelectInput'
import ContainedButton from '../../Components/Buttons/ContainedButton'
import AbsoluteCloseButton from '../../Components/Buttons/AbsoluteCloseButton'
import ActionButton from '../../Components/Buttons/ActionButton'

export const position = [
  { id: 1, label: 'Layihə rəhbəri' },
  { id: 2, label: 'Məhsul sahibi' },
  { id: 3, label: 'UI/UX dizayner' },
  { id: 4, label: 'IT analitik' },
  { id: 5, label: 'DB admin' },
  { id: 6, label: 'SQL developer' },
  { id: 7, label: 'Front-end developer' },
  { id: 8, label: 'Back-end developer' },
];
export const emp = [
  { id: 1, label: 'Nərmin Ağayeva' },
  { id: 2, label: 'Nərmin Ağayeva' },
  { id: 3, label: 'Nərmin Ağayeva' },
  { id: 4, label: 'Nərmin Ağayeva' },
  { id: 5, label: 'Nərmin Ağayeva' },
  { id: 6, label: 'Nərmin Ağayeva' },
  { id: 7, label: 'Nərmin Ağayeva' },
  { id: 8, label: 'Nərmin Ağayeva' },
]

const FirstWindow = () => {

<<<<<<< HEAD
=======
  const position = [
    { id: 1, label: 'Layihə rəhbəri' },
    { id: 2, label: 'Məhsul sahibi' },
    { id: 3, label: 'UI/UX dizayner' },
    { id: 4, label: 'IT analitik' },
    { id: 5, label: 'DB admin' },
    { id: 6, label: 'SQL developer' },
    { id: 7, label: 'Front-end developer' },
    { id: 8, label: 'Back-end developer' },
  ];

  const emp = [
    { id: 1, label: 'Nərmin Ağayeva' },
    { id: 2, label: 'Nərmin Ağayeva' },
    { id: 3, label: 'Nərmin Ağayeva' },
    { id: 4, label: 'Nərmin Ağayeva' },
    { id: 5, label: 'Nərmin Ağayeva' },
    { id: 6, label: 'Nərmin Ağayeva' },
    { id: 7, label: 'Nərmin Ağayeva' },
    { id: 8, label: 'Nərmin Ağayeva' },
  ]

>>>>>>> 51ffd5f2eda02d9af7022a95fb9c381a00deec16
  const stage = [
    { id: 1, label: 'Analiz' },
    { id: 2, label: 'Dizayn' },
    { id: 3, label: 'Development' },
    { id: 4, label: 'Test' },
    { id: 5, label: 'Demo' },
    { id: 6, label: 'Tətbiq' },
  ]

  return (
    <div>
      <MultilineInput
        labelName={"Layihənin adı"}
        placeholder={"Dashboard Management Systems"}
        charCount={5}
        readOnly={false}
      />

      <Textarea
        labelName={"Layihənin qısa izahı"}
        maxCharCount={Infinity}
        helpertext={false}
      />

      <Textarea
        labelName={"Tapşırığın adı"}
        maxCharCount={500}
        helpertext={true}
      />

      <Combobox
        labelName={"Rol"}
        placeholder={"Front-end"}
        position={position}
      />

      <SelectInput />


      <ComboCheckbox
        emp={emp}
      />

      <DisableInput
        labelName={"Task nömrəsi"}
        defaultValue={"1.2"}
      />

      <DateInput
        labelName={"Bitmə tarixi"}
      />

      <br />
      <br />
      <br />

      <ContainedButton
        text={"yeni layihə yarat"}
        paddingSize={"16px 32px"}
        variantName={"contained"}
        disable={false}
      />
      <br />
      <br />

      <ContainedButton
        text={"yadda saxla"}
        paddingSize={"16px 24px"}
        variantName={"contained"}
      />
      <br />
      <br />

      <ContainedButton
        text={"sil"}
        paddingSize={"16px 50.5px"}
        variantName={"contained"}
      />
      <br />
      <br />

      <ContainedButton
        text={"ləğv et"}
        paddingSize={"16px 32px"}
        variantName={"outlined"}
      />

      <br />
      <br />

      <AbsoluteCloseButton />

      <br />
      <br />

      <ActionButton />

    </div>
  )

}

export default FirstWindow;