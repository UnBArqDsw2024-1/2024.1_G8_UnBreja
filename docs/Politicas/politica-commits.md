# Política de *Commits* e *Branching*

## Introdução

O presente projeto será desenvolvido coletivamente por todos os integrantes de sua equipe. Para a garantia de uma boa cooperação entre os membros e um consequente bom andamento do projeto, faz-se necessária a elaboração de uma política de *commits* e *branching*.

Deste modo, este documento visa estabelecer regras e princípios cuja adoção facilitará a organização do repositório.

## Política de *Commits*

Quanto à mensagem do commit, esta deve ser sucinta e descritiva, apresentando um resumo das modificações que o *commit* faz (em português).

Caso o *commit* esteja relacionado a uma *issue*, esta deve ser referenciada na mensagem do *commit*.
Exemplo:
```
Adiciona funcionalidade de login #91
```

No caso de commits relacionados a atividades desenvolvidas em conjunto, deve-se utilizar a seguinte estrutura:
```
Adiciona funcionalidade de login #91

Co-authored-by: nome-do-autor <email-do-autor>
```

## Políticas de *Branching*

Para a política de *branching*, adotaremos o modelo de *branching* baseado em *GitFlow (Feature Branching)*. Este modelo consiste em criar uma *branch* para cada funcionalidade a ser desenvolvida, a partir da *branch* `main`. Após a conclusão do desenvolvimento, a *branch* da funcionalidade será integrada à `main` por meio de um *pull request*.

A *branch* deve ter um nome descritivo e sucinto, deverá viver apenas enquanto a funcionalidade estiver sendo desenvolvida e deverá ser deletada após a integração com a `main`.

### *Branches* principais

- `main`: *Branch* principal do projeto, contendo a versão estável do código.
- `gh-pages`: *Branch* de publicação do site da documentação.

## 4. Controle de Versionamento 

| Versão | Data da alteração |      Alteração      |                       Responsável                       | Revisor | Data de revisão |
| :----: | :---------------: | :-----------------: | :-----------------------------------------------------: | :-----: | :-------------: |
|  1.0   |    08/07/2024     | Criação do Artefato | [Eduardo Rodrigues](https://github.com/Eduardo-RFarias) |         |                 |